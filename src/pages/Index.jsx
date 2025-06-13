import Header from "../components/Header";
import GameCard from "../components/GameCard";
import { BookOpen, Puzzle, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-cyan-50">
      <Header />

      {/* 英雄区域 */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            探索中华诗词之美
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            在游戏中感受千年文化魅力，提升诗词素养，传承中华经典
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-emerald-700 hover:bg-emerald-100 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              开始游戏
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* 游戏介绍 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              诗词游戏
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              通过趣味游戏学习经典诗词，在挑战中提升文学素养
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GameCard
              title="诗词填空"
              description="补全经典诗句，考验诗词记忆能力"
              icon={<Puzzle className="h-8 w-8 text-emerald-600" />}
              bgColor="border-t-4 border-emerald-500"
            />
            <GameCard
              title="诗词接龙"
              description="接续经典诗句，展现诗词积累"
              icon={<BookOpen className="h-8 w-8 text-amber-500" />}
              bgColor="border-t-4 border-amber-500"
            />
            <GameCard
              title="飞花令"
              description="说出含特定字的诗句，挑战诗词储备"
              icon={<Sparkles className="h-8 w-8 text-rose-500" />}
              bgColor="border-t-4 border-rose-500"
            />
          </div>
        </div>
      </section>

      {/* 诗词展示 */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">今日推荐</h2>
            <p className="text-xl text-gray-600">
              每日一首经典诗词，品味中华文化精髓
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-amber-100 p-8 flex items-center justify-center">
                <img
                  src="https://nocode.meituan.com/photo/search?keyword=chinese-poetry,landscape&width=400&height=400"
                  alt="诗词意境"
                  className="rounded-lg shadow-md mx-auto object-cover w-full h-64 md:h-auto"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">
                  《静夜思》· 李白
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-xl">床前明月光，疑是地上霜。</p>
                  <p className="text-xl">举头望明月，低头思故乡。</p>
                </div>
                <p className="text-gray-600">
                  这首五言绝句通过描绘月夜景象，表达了诗人深切的思乡之情。语言简练，意境深远，是李白最广为流传的作品之一。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">© 2023 诗韵游 - 中华诗词游戏平台</p>
            <p className="text-gray-400">传承中华文化，品味诗词之美</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
