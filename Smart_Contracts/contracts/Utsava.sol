// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Utsava {

    address public Owner;
    uint256 _Id1 = 0;
    uint _Id2 = 0;

    constructor() {
        Owner = msg.sender;
    }

    struct Hall {
        uint256 Id;
        string Name;
        string Address;
        bool Lighting;
        bool Catering;
        bool Decoration;
        string Special;
        uint256 Capacity;
        uint256 Price;
        bool Availability;
    }

    mapping (address => Hall[]) public Halls;
    mapping (uint256 => uint256[]) public HallDates;

    struct User {
        uint256 Id;
        string Name;
        address Wallet;
        string Occasion;
        uint256 Invitations;
        string Advices;
        uint256 Date;
    }

    mapping (address => User[]) public Users;

    modifier onlyOwner() {
        require(msg.sender == Owner,"Only Owner can access!");
        _;
    }

    modifier capacityFullOrNot(uint _id1, uint _id2) {
        require(Users[Owner][_id2].Invitations <= Halls[Owner][_id1].Capacity,"Capacity full");
        _;
    }

    modifier availableOrNot(uint _id1) {
        require(Halls[Owner][_id1].Availability == false,"Reserved");
        _;
    }

    function createHall(string memory _Name,string memory _Address,bool _Lighting, bool _Catering,bool _Decoration,string memory _Special,uint _Capacity,uint256 _Price) public {

        Hall memory newHall = Hall({
                Id : _Id1,
                Name : _Name,
                Address : _Address,
                Lighting : _Lighting,
                Catering : _Catering,
                Decoration : _Decoration,
                Special : _Special,
                Capacity : _Capacity,
                Price : _Price,
                Availability : false
        });

        Halls[Owner].push(newHall);
        _Id1++;

    }

    function showHalls() view public returns (Hall[] memory) {
        return Halls[Owner];
    }

    function showSingleHall(uint256 i) view public returns(Hall memory){
        return Halls[Owner][i];
    }

    function createUser(string memory _Name,address _Wallet,string memory _Occasion,uint256 _Invitations, string memory _Advices,uint256 _Date) public {

        User memory newUser = User({
            Id : _Id2,
            Name : _Name,
            Wallet : _Wallet,
            Occasion : _Occasion,
            Invitations : _Invitations,
            Advices : _Advices,
            Date : _Date
        });

        Users[Owner].push(newUser);
        _Id2++;

    }

    function showUsers() view public returns(User[] memory) {
        return Users[Owner];
    }

    function showSingleUser(uint256 i) view public returns(User memory) {
        return Users[Owner][i];
    }

    function requestBooking(uint256 _id1,uint256 _id2) public payable capacityFullOrNot(_id1,_id2) availableOrNot(_id1) returns(bool confirmation) {
        
        require((Users[Owner][_id2].Wallet).balance >= Halls[Owner][_id1].Price,"Insufficient funds");
        require(HallDates[_id1][HallDates[_Id1].length - 1] != Users[Owner][_id2].Date,"Hall Booked");
        payable(Owner).transfer(Halls[Owner][_id1].Price);
        confirmation = true;
        return confirmation;

    }

    function confirmBookingFromHall() public  {
        
    }
}