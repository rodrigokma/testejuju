function YearOption(props) {
  return (
    <div className="year-option">
      {props.modelCode && (
        <select value={props.value} onChange={props.onChange}>
          <option data-testid="select-year" value="">
            Choose a year
          </option>

          {props.years.map((year) => {
            return (
              <option key={`year-${year.codigo}`} value={year.codigo}>
                {year.nome}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default YearOption;
