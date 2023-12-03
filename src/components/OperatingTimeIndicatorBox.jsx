export default function OperatingTimeIndicatorBox({ operatingTime }) {
  return (
    <div className="bg-base p-3 flex flex-col gap-4 rounded-lg justify-center">
      <ul className="text-center font-medium text-sm">
        {operatingTime.map((period) => {
          return <li key={Math.random()}>{period}</li>;
        })}
      </ul>
    </div>
  );
}
