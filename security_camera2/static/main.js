function cameraReceive(data) {
  // HTMLで扱える形式に変換して表示する
  document.getElementById("camera-box").src = URL.createObjectURL(new Blob([data], { type: "image/jpeg" }));
}

function movingReceive(data) {
  // 処理中の画像を表示する
  document.getElementById("camera-box").src = "./static/processing.jpg"
}

function messageReceive(data) {
  // 動体検出された画像を表示する
  document.getElementById("photo-box").src = data.image_path;
  // 検出した時刻とラベルを表示する
  document.getElementById("photo-info").innerHTML = "【動体検出した時刻】" + data.date + "<br/>" + "【AWSの分析結果】" + data.labels;
}


// WebSocketで接続する準備
const ws = io.connect();


// 動体検出したときに呼び出す関数を決める
ws.on("moving", movingReceive);

// 画像パスとラベルを受信したときに呼び出す関数を決める
ws.on("message", messageReceive);

// カメラ映像を受信したときに呼び出す関数を決める
ws.on("camera", cameraReceive);
