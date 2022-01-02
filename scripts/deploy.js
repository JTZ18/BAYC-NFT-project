async function main() {
    // Grab the contract factory 
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(
        "Not a Bored Ape",
        "APE",
        "ipfs://QmdRAvWJa2Ck3pQPVni1DhYHc1zZNvJnZWAacS3vfWuDYA/",
        "https://gateway.pinata.cloud/ipfs/QmfA4QedoT5gztQc4X56FGCCYDqxAV14Wt8oJ7TzeJATrS?preview=1"
    ); // Instance of the contract 
    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });