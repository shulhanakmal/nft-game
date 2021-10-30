const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["youpi", "pitou", "pouf"],       // Names
    ["QmVtr6JPeE73ejU1Hfi3cQ2skaJfSbrAeRXsfBKch62mao", // Images
    "Qmd8M8mH7xXK4PeQwfP8ame4QrCwB6pPHJAd82ZtJCc6r7", 
    "QmTv6cuEMRyFiiQq9ubpDKnHLYxeTEtjW6jJVu1H7H3Be9"],
    [1100, 1000, 800],                    // HP values
    [90, 100, 80],
    "Angry Grandma", // Boss name
    // "https://media.istockphoto.com/vectors/angry-grandmother-character-vector-id510901681?k=20&m=510901681&s=612x612&w=0&h=gv0peZROM2dcoR_jtFBx5RKK4L1aKiw543ZqoF7f0QE=", // Boss image
    "QmaNTKDPbbE2JTxqvewY6CdHBcwRYdYe3W11ZRGzy2Tj61"],
    200000, // Boss hp
    25 // Boss attack damage                       // Attack damage values
  );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    // let txn;
    // txn = await gameContract.mintCharacterNFT(0);
    // await txn.wait();

    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();

    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // let returnedTokenUri = await gameContract.tokenURI(0);
    // console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();