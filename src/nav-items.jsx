import { HomeIcon, BookOpen, Puzzle, Sparkles } from "lucide-react";
import Index from "./pages/Index.jsx";
import PoetryFill from "./pages/PoetryFill.jsx";
import PoetryChain from "./pages/PoetryChain.jsx";
import FlowerGame from "./pages/FlowerGame.jsx";

/**
* Central place for defining the navigation items. Used for navigation components and routing.
*/
export const navItems = [
  {
    title: "首页",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "诗词填空",
    to: "/poetry-fill",
    icon: <Puzzle className="h-4 w-4" />,
    page: <PoetryFill />,
  },
  {
    title: "诗词接龙",
    to: "/poetry-chain",
    icon: <BookOpen className="h-4 w-4" />,
    page: <PoetryChain />,
  },
  {
    title: "飞花令",
    to: "/flower-game",
    icon: <Sparkles className="h-4 w-4" />,
    page: <FlowerGame />,
  },
];
