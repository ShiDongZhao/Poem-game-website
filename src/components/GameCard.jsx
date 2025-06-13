const GameCard = ({ title, description, icon, bgColor }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${bgColor}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-opacity-20 bg-white mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default GameCard;
