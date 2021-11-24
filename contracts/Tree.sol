pragma solidity >=0.4.21 <0.7.0;

contract Tree {
  enum State { Created, Locked, Inactive }

  uint public percentOng;
  address payable public ong;
  address payable public seller;
  address payable public buyer;
  State public state;

  constructor() public payable {
    seller = msg.sender;
    percentOng = 10;
  }

  modifier onlyBuyer() {
    require(msg.sender == buyer, "Only buyer can call this.");
    _;
  }

  modifier onlySeller() {
    require(msg.sender == seller, "Only seller can call this.");
    _;
  }

  event Aborted();
  event PurchaseConfirmed();
  event ItemReceived();

  function setOng(address payable ongAddress) public {
    ong = ongAddress;
  }

  function abort() public onlySeller {
    emit Aborted();
    state = State.Inactive;
    seller.transfer(address(this).balance);
  }

  function confirmReceived(uint value) private onlyBuyer {
    emit ItemReceived();

    state = State.Inactive;

    uint ongValue = value / 100 * percentOng;

    ong.transfer(ongValue);
    seller.transfer(address(this).balance);
  }

  function confirmReceived(uint value, uint percent) private onlyBuyer {
    emit ItemReceived();

    state = State.Inactive;

    uint ongValue = value / 100 * percent;

    ong.transfer(ongValue);
    seller.transfer(address(this).balance);
  }
    
  function confirmPurchase(uint treeCost) public payable {
    require(ong != address(0x0), "ONG address not find.");
    require(treeCost * 1 ether == uint(msg.value), "Wrong value to tranfer.");

    emit PurchaseConfirmed();

    buyer = msg.sender;
    state = State.Locked;
    
    confirmReceived(msg.value);
  }
  
    function confirmPurchase(uint treeCost, uint percent) public payable {
    require(ong != address(0x0), "ONG address not find.");
    require(treeCost * 1 ether == uint(msg.value), "Wrong value to tranfer.");

    emit PurchaseConfirmed();

    buyer = msg.sender;
    state = State.Locked;
    
    confirmReceived(msg.value, percent);
  }
  
  function getBalance() public view returns (uint) {
    return uint(address(this).balance);
  }
}