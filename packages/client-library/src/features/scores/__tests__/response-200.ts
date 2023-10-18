export const scoreResponse200 = {
  data: {
    type: "scores",
    location: {
      high_schools: {
        value: "3.5",
        text: "At least one high school within a 20-minute walk",
      },
      primary_schools: {
        value: "4.0",
        text: "At least one elementary school within a 10-minute walk",
      },
      transit_friendly: { value: "4.5", text: "Near a subway and frequent bus lines" },
      groceries: { value: "4.0", text: "" },
      restaurants: {
        value: "4.0",
        text: "Variety of restaurants within a few minutes' walk",
      },
      pedestrian_friendly: {
        value: "4.0",
        text: "All day-to-day needs are within walking distance",
      },
      greenery: {
        value: "5.0",
        text: "Lots of trees on the streets and in the area, and a very large amount of park space within a few minutes' walk",
      },
      cycling_friendly: {
        value: "3.5",
        text: "Some cycling-friendly infrastructure nearby, connecting some destinations",
      },
      car_friendly: {
        value: "3.0",
        text: "Arteries nearby, but traffic congestion and parking problems are possible",
      },
      vibrant: { value: "2.5", text: "Quiet atmosphere most of the day" },
      shopping: { value: "4.5", text: "Wide variety of shops within a few minutes' walk" },
      daycares: { value: "3.5", text: "At least one daycare within a 20-minute walk" },
      nightlife: { value: "2.5", text: "Some bars within walking distance" },
      cafes: { value: "4.0", text: "Variety of caf\u00e9s within a few minutes' walk" },
      quiet: { value: "4.0", text: "Some sources of noise nearby" },
      parks: { value: "4.5", text: "Large amount of park space nearby" },
    },
    geographies: [
      {
        geog_id: "g10_dpz82zw0",
        name: "Casa Loma",
        geog_level_type: "neighbourhood",
        scores: {
          pedestrian_friendly: {
            value: "4.4",
            text: "All day-to-day needs are within walking distance",
          },
          vibrant: { value: "2.8", text: "Quiet atmosphere most of the day" },
          historic: { value: "-1.0", text: "" },
          nightlife: { value: "2.7", text: "Some bars within walking distance" },
          high_schools: {
            value: "3.9",
            text: "At least one high school within a 20-minute walk",
          },
          daycares: { value: "3.1", text: "At least one daycare within a 20-minute walk" },
          cycling_friendly: {
            value: "4.0",
            text: "Some cycling-friendly infrastructure nearby, connecting some destinations",
          },
          transit_friendly: { value: "4.9", text: "Near a subway and frequent bus lines" },
          parks: { value: "4.6", text: "Large amount of park space nearby" },
          greenery: {
            value: "4.0",
            text: "Lots of trees in the area, and a large amount of park space nearby",
          },
          primary_schools: {
            value: "4.7",
            text: "At least one elementary school within a 5-minute walk",
          },
          car_friendly: {
            value: "2.7",
            text: "Some arteries nearby, but traffic congestion and parking problems are likely",
          },
          cafes: { value: "4.0", text: "Variety of caf\u00e9s within a few minutes' walk" },
          restaurants: {
            value: "4.2",
            text: "Variety of restaurants within a few minutes' walk",
          },
          quiet: { value: "2.8", text: "Multiple sources of noise nearby" },
          groceries: {
            value: "4.5",
            text: "At least one grocery store within a few minutes' walk",
          },
          shopping: { value: "4.5", text: "Wide variety of shops within a few minutes' walk" },
        },
      },
      {
        geog_id: "g30_dpz89rm7",
        name: "Toronto",
        geog_level_type: "municipality",
        scores: {
          pedestrian_friendly: {
            value: "3.2",
            text: "Some day-to-day needs are within walking distance",
          },
          vibrant: { value: "1.6", text: "Quiet atmosphere at all hours" },
          historic: { value: "-1.0", text: "" },
          nightlife: { value: "1.4", text: "Few or no bars within walking distance" },
          high_schools: {
            value: "3.2",
            text: "At least one high school within a 20-minute walk",
          },
          daycares: { value: "2.5", text: "At least one daycare within a 30-minute walk" },
          cycling_friendly: {
            value: "2.5",
            text: "Minimal cycling-friendly infrastructure nearby or few destinations within cycling distance",
          },
          transit_friendly: {
            value: "4.0",
            text: "Within walking distance of a subway and frequent bus lines",
          },
          parks: { value: "4.3", text: "Large amount of park space nearby" },
          greenery: {
            value: "3.3",
            text: "Some trees on the street, with some parks nearby",
          },
          primary_schools: {
            value: "4.2",
            text: "At least one elementary school within a 10-minute walk",
          },
          car_friendly: {
            value: "3.9",
            text: "Good access to freeways and major arteries, with a large amount of parking nearby",
          },
          cafes: { value: "2.6", text: "Some caf\u00e9s within walking distance" },
          restaurants: { value: "3.0", text: "Some restaurants within walking distance" },
          quiet: { value: "3.0", text: "Multiple sources of noise nearby" },
          groceries: {
            value: "3.5",
            text: "At least one grocery store within a 15-minute walk",
          },
          shopping: { value: "3.1", text: "Variety of shops within walking distance" },
        },
      },
    ],
  },
  meta: {
    message: "Successfully called v3/scores API.",
    type: "LocalLogic.API.Success",
    statusCode: 200,
  },
};
