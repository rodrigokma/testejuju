const BrandOptions = ({ value = "", onChange, brands }) => {
  return (
    <div className="brand-options">
      <select value={value} onChange={onChange}>
        <option data-testid="select-brand" value="">
          Select a brand
        </option>

        {brands &&
          brands.map((brand) => (
            <option
              data-testid="brand-option"
              key={`brand-${brand.codigo}`}
              value={brand.codigo}
            >
              {brand.nome}
            </option>
          ))}
      </select>
    </div>
  );
};

export default BrandOptions;
