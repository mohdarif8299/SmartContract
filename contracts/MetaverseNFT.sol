// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaverseNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("MetaverseNFT", "MNFT") Ownable(msg.sender) {
        emit ContractDeployed(msg.sender);
    }

    event ContractDeployed(address owner);

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId;
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
        nextTokenId++;
        return tokenId;
    }
}