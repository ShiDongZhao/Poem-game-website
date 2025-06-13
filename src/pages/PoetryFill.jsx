const PoetryFill = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">诗词填空</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-center">
            请补全以下诗句：
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-xl text-center">
              床前明月光，疑是地上<span className="inline-block w-24 border-b-2 border-dashed border-gray-400 mx-2"></span>。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['霜', '雪', '露', '雾', '冰', '水', '雨', '珠'].map((option) => (
              <button 
                key={option}
                className="py-3 px-4 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoetryFill;
