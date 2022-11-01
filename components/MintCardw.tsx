import {
    useClaimedNFTSupply,
    useContractMetadata,
    useUnclaimedNFTSupply,
    useActiveClaimCondition,
    Web3Button,
    useContract,
  } from "@thirdweb-dev/react";
  import { formatUnits, parseUnits } from "ethers/lib/utils";
  import type { NextPage } from "next";
  import { useState } from "react";
  import styles from "../styles/Mint.module.css";
  
  // Put Your NFT Drop Contract address from the dashboard here
  const myNftDropContractAddress = "0x4a273D0e17cF02EFb2B34fE67f40a0D7F96BbD9C";
  
  const MintCardw: NextPage = () => {
    const { contract: nftDrop } = useContract(myNftDropContractAddress);
  
    // The amount the user claims
    const [quantity, setQuantity] = useState(1); // default to 1
  
    // Load contract metadata
    const { data: contractMetadata } = useContractMetadata(nftDrop);
  
    // Load claimed supply and unclaimed supply
    const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop);
    const { data: claimedSupply } = useClaimedNFTSupply(nftDrop);
  
    // Load the active claim condition
    const { data: activeClaimCondition } = useActiveClaimCondition(nftDrop);
  
    // Check if there's NFTs left on the active claim phase
    const isNotReady =
      activeClaimCondition &&
      parseInt(activeClaimCondition?.availableSupply) === 0;
  
    // Check if there's any NFTs left
    const isSoldOut = unclaimedSupply?.toNumber() === 0;
  
    // Check price
    const price = parseUnits(
      activeClaimCondition?.currencyMetadata.displayValue || "0",
      activeClaimCondition?.currencyMetadata.decimals
    );
  
    // Multiply depending on quantity
    const priceToMint = price.mul(quantity);
  
    // Loading state while we fetch the metadata
    if (!nftDrop || !contractMetadata) {
      return <div className={styles.container}>Loading...</div>;
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.mintInfoContainer}>
        
  
          <div className={styles.imageSide}>
            {/* Image Preview of NFTs */}
            <img
              className={styles.image}
              src={contractMetadata?.image}
              alt={`${contractMetadata?.name} preview image`}
            />

            <div className={styles.mainButton}>
              <p>Страх и Ненависть</p>
            </div>
  
            {/* Amount claimed so far */}
            <div className={styles.mainButton}>
              <div className={styles.mintAreaLeft}>
                <p>Total Minted </p>
                {" "}
              </div>
              <div className={styles.mintAreaRight}>
                {claimedSupply && unclaimedSupply ? (
                  <p>
                    {/* Claimed supply so far */}
                    <b>{claimedSupply?.toNumber()}</b>
                    {" / "}
                    {
                      // Add unclaimed and claimed supply to get the total supply
                      claimedSupply?.toNumber() + unclaimedSupply?.toNumber()
                    }
                  </p>
                ) : (
                  // Show loading state if we're still loading the supply
                  <p>Loading...</p>
                )}
              </div>
            </div>
  
            {/* Show claim button or connect wallet button */}
            {
              // Sold out or show the claim button
              isSoldOut ? (
                <div>
                  <h2>Sold Out</h2>
                </div>
              ) : isNotReady ? (
                <div>
                  <h2>Not ready to be minted yet</h2>
                </div>
              ) : (
                <>
                  
  
                  <div className={styles.mintContainer}>
                    <Web3Button
                      contractAddress={myNftDropContractAddress}
                      action={async (contract) =>
                        await contract.erc721.claim(quantity)
                      }
                      // If the function is successful, we can do something here.
                      onSuccess={(result) =>
                        alert(
                          `Successfully minted ${result.length} NFT${
                            result.length > 1 ? "s" : ""
                          }!`
                        )
                      }
                      // If the function fails, we can do something here.
                      onError={(error) => alert(error?.message)}
                      accentColor="#B9261C"
                      colorMode="light"
                    >
                      {`Mint${quantity > 1 ? ` ${quantity}` : ""}${
                        activeClaimCondition?.price.eq(0)
                          ? " (Free)"
                          : activeClaimCondition?.currencyMetadata.displayValue
                          ? ` (${formatUnits(
                              priceToMint,
                              activeClaimCondition.currencyMetadata.decimals
                            )} ${activeClaimCondition?.currencyMetadata.symbol})`
                          : ""
                      }`}
                    </Web3Button>
                  </div>
                </>
              )
            }
          </div>
        </div>
        {/* Powered by thirdweb */}{" "}
        
      </div>
      
    );
  };
  
  export default MintCardw;