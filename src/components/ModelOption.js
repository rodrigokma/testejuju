function ModelOption(props) {
  return (
    <div className="model-option">
      {props.brandCode && (
        <select value={props.value} onChange={props.onChange}>
          <option data-testid="select-model" value="">
            Choose a model
          </option>

          {props.models.map((model) => {
            return (
              <option key={`model-${model.codigo}`} value={model.codigo}>
                {model.nome}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default ModelOption;
