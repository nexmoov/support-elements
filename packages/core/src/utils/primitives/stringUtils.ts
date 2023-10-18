export const pluralize = (textSingular: string, count: number, textPlural?: string) => {
  if (count === 1) {
    return textSingular;
  }

  return textPlural ?? `${textSingular}s`;
};

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const formatAddress = ({
  houseNumber,
  street,
  city,
  state,
  country,
  postalCode,
}: {
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  county?: string;
  street?: string;
  houseNumber?: string;
}) => {
  // Complicated ternary... could be built with if statements.
  // However, this shouldn't change often. The following line formats
  // the address as such (basically puttin a space between house number and street):
  // "123 Wood St" || "123" || "Wood St"
  const streetAddress = `${
    houseNumber ? `${houseNumber && street ? `${houseNumber} ` : `${houseNumber}`}` : ""
  }${street || ""}`;

  return (
    [streetAddress, city, state, country, postalCode].reduceRight((previous, current) => {
      if (previous && current) {
        return `${current}, ${previous}`;
      }

      return current || previous || "";
    }) || ""
  );
};
