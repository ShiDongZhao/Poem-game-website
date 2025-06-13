const FlowerGame = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">飞花令</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-center">
            请说出包含以下字的诗句：
          </p>
          <div className="text-center mb-8">
            <span className="inline-block text-6xl font-bold text-rose-500 animate-pulse">花</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-rose-50 p-4 rounded-lg">
              <p className="text-gray-700">玩家1: 花间一壶酒，独酌无相亲。</p>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg">
              <p className="text-gray-700">玩家2: 感时花溅泪，恨别鸟惊心。</p>
            </div>
          </div>
          <div className="flex gap-4">
            <input 
              type="text" 
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="输入包含'花'字的诗句..."
            />
            <button className="py-3 px-6 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg transition-colors duration-200">
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerGame;
