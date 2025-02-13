export default function sendMessage(msg: string) {
    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: msg })
    })
        .then(() => console.log("Successfully sent message"))
        .catch(console.error);
}