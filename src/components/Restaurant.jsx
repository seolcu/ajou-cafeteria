export default function Restaurant({ cafeteriaInfo }) {
  return (
    <>
      <h2 className="font-bold text-lg">메뉴 목록</h2>
      <div className="grid grid-cols-2 gap-4">
        {cafeteriaInfo.menu.map((menu) => (
          <div
            key={menu.id}
            className="bg-base p-4 rounded-lg text-center flex flex-col gap-2"
          >
            <h3 className="font-medium">{menu.name}</h3>
            <p className="text-xs">{menu.ingredients.toString()}</p>
            <p className="text-xs">{menu.price}원</p>
          </div>
        ))}
      </div>
    </>
  );
}
