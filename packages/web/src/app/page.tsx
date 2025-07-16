export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          YouTube Memo App
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <p className="text-center text-gray-600 mb-4">
            YouTubeの動画にタイムスタンプ付きメモを作成・管理できるアプリです
          </p>
          <div className="text-center">
            <button className="bg-youtube-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              ログイン
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}