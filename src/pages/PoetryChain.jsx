const PoetryChain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">诗词接龙</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-center">
            请接续以下诗句：
          </p>
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <p className="text-xl text-center">
              春眠不觉晓，处处闻啼鸟。
            </p>
          </div>
          <textarea 
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="请输入下一句诗句..."
          />
          <button className="mt-4 w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-200">
            提交答案
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoetryChain;
