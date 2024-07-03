async function translateText() {
    const inputText = document.getElementById("input-text").value;
    const sourceLanguage = document.getElementById("source-language").value;
    const targetLanguage = document.getElementById("target-language").value;

    if (inputText != "") {
        const address = "/translate?input_text=" + inputText + "&source_lang=" + sourceLanguage + "&target_lang=" + targetLanguage;
        // Pythonの関数を呼び出して、responseを受け取る
        axios.get(address).then((response) => {
            document.getElementById("output-text").innerText = response.data;
        });
    }

    // 6行～13行の内容は書き方が異なるだけで、以下と同じ内容です。
    // if (inputText != "") {
    //     axios
    //         // 翻訳処理をお願いする
    //         .get("/translate" + "?input_text=" + inputText + "&source_lang=" + sourceLanguage + "&target_lang=" + targetLanguage)

    //         // しばらくすると、取得したテキストがresponseに格納される
    //         .then((response) => {
    //             const textbox = document.getElementById("output-text");
    //             textbox.innerText = response.data;
    //         });
    // }
}
