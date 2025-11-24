import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { createWallet, inAppWallet } from "thirdweb/wallets";

// Initialize ThirdWeb Client
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
    console.warn("NEXT_PUBLIC_THIRDWEB_CLIENT_ID is not set in environment variables.");
}

export const client = createThirdwebClient({
    clientId: clientId || "87654321876543218765432187654321", // Fallback for dev/build
});

// Define Chain (Base)
export const chain = defineChain(8453);

// Define Wallets
export const wallets = [
    inAppWallet({
        auth: {
            options: [
                "google",
                "discord",
                "telegram",
                "email",
                "x",
                "passkey",
                "coinbase",
                "github",
            ],
        },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
];
