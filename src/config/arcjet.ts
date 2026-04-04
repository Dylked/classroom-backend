import arcjet, {shield, detectBot, tokenBucket, slidingWindow} from "@arcjet/node";
import router from "../routes/subjects";

if(!process.env.ARCJET_KEY && process.env.NODE_ENV !== 'test'){
    throw new Error('ARCJET_KEY env is required')
}

const aj = arcjet({
    // Get your site key from https://app.arcjet.com and set it as an environment
    // variable rather than hard coding.
    key: process.env.ARCJET_KEY!,
    rules: [
        // Shield protects your app from common attacks e.g. SQL injection
        shield({ mode: "LIVE" }),
        // Create a bot detection rule
        detectBot({
            mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
            // Block all bots except the following
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                "CATEGORY:PREVIEW",
            ],
        }),
        slidingWindow({
            mode:'LIVE',
            interval: '2s',
            max:5,
        })
    ],
});

export default aj;