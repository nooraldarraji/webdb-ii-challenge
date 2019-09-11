
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: "123456789ASDFGHJKL1",
          make: "Ford",
          model: "Mustang",
          mileage: 45000
        },
        {
          VIN: "123456789ASDFGHJKL2",
          make: "GTR",
          model: "R34",
          mileage: 6000,
          transmission_type: "automatic",
          title_status: "Clean"
        },
        {
          VIN: "123456789ASDFGHJKL3",
          make: "Toyota",
          model: "Camry",
          mileage: 72000,
          title_status: "Salvage"
        },
        {
          VIN: "123456789ASDFGHJKL4",
          make: "Mercedes",
          model: "C300",
          mileage: 5000,
          transmission_type: "Auto"
        }
      ]);
    });
};
