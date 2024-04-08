const express = require('express');
const app = express();
const { SuperfaceClient } = require('@superfaceai/one-sdk');
const sdk = new SuperfaceClient();
const cors = require('cors')
const dotenv = require('dotenv').config();


app.use(express.json());
app.use(cors({ origin: process.env.TRUSTED_ORIGINS }))

async function geocodeLocation(loc) {
  // Load the profile
  const profile = await sdk.getProfile('address/geocoding@3.1.2');

  // Use the profile
  const result = await profile.getUseCase('Geocode').perform(
    {
      query: loc,
    },
    {
      provider: 'nominatim',
    }
  );

  // Handle the result
  const data = result.unwrap();
  return data;
}

app.get('/api/geocode', async (req, res) => {
  try {
    const location = req.query.location;
    const coordinates = await geocodeLocation(location);
    res.json({ location, coordinates });
  } catch (error) {
    res.status(500).json(error);
  }
});

mainData = [
  {
    name: 'Абыйский район',
    numOfAtractions: 8,
    numOfHotels: 1,
    transportAccessibility: 3,
  },
  {
    name: 'Алданский район',
    numOfAtractions: 7,
    numOfHotels: 13,
    transportAccessibility: 5,
  },
  {
    name: 'Амгинскйи район',
    numOfAtractions: 13,
    numOfHotels: 17,
    transportAccessibility: 3,
  },
  {
    name: 'Анабарский район',
    numOfAtractions: 3,
    numOfHotels: 0,
    transportAccessibility: 1,
  },
  {
    name: 'Булинский район',
    numOfAtractions: 3,
    numOfHotels: 0,
    transportAccessibility: 1,
  },
  {
    name: 'Верхновилюйский район',
    numOfAtractions: 5,
    numOfHotels: 3,
    transportAccessibility: 4,
  },
  {
    name: 'Верхеколымский район',
    numOfAtractions: 1,
    numOfHotels: 2,
    transportAccessibility: 2,
  },
  {
    name: 'Верхоянский район',
    numOfAtractions: 12,
    numOfHotels: 1,
    transportAccessibility: 5,
  },
  {
    name: 'Вилюйский район',
    numOfAtractions: 6,
    numOfHotels: 2,
    transportAccessibility: 5,
  },
  {
    name: 'Горный район',
    numOfAtractions: 8,
    numOfHotels: 6,
    transportAccessibility: 4,
  },
  {
    name: 'Жигановский район',
    numOfAtractions: 6,
    numOfHotels: 2,
    transportAccessibility: 3,
  },
  {
    name: 'Кобяйский район',
    numOfAtractions: 2,
    numOfHotels: 4,
    transportAccessibility: 4,
  },
  {
    name: 'Ленский район',
    numOfAtractions: 14,
    numOfHotels: 7,
    transportAccessibility: 5,
  },
  {
    name: 'Мегило-Кангаласский район',
    numOfAtractions: 8,
    numOfHotels: 8,
    transportAccessibility: 15,
  },
  {
    name: 'Мирнинский район',
    numOfAtractions: 22,
    numOfHotels: 10,
    transportAccessibility: 5,
  },
  {
    name: 'Момский район',
    numOfAtractions: 3,
    numOfHotels: 1,
    transportAccessibility: 3,
  },
  {
    name: 'Намский район',
    numOfAtractions: 16,
    numOfHotels: 19,
    transportAccessibility: 5,
  },
  {
    name: 'Нерюнгринский район',
    numOfAtractions: 6,
    numOfHotels: 12,
    transportAccessibility: 4,
  },
  {
    name: 'Нижнеколымский район',
    numOfAtractions: 20,
    numOfHotels: 1,
    transportAccessibility: 1,
  },
  {
    name: 'Нюрбинский район',
    numOfAtractions: 10,
    numOfHotels: 6,
    transportAccessibility: 3,
  },
  {
    name: 'Оймяконский район',
    numOfAtractions: 37,
    numOfHotels: 1,
    transportAccessibility: 2,
  },
  {
    name: 'Олёкминский район',
    numOfAtractions: 5,
    numOfHotels: 5,
    transportAccessibility: 3,
  },
  {
    name: 'Среднеколымский район',
    numOfAtractions: 3,
    numOfHotels: 1,
    transportAccessibility: 2,
  },
  {
    name: 'Сунтарский район',
    numOfAtractions: 13,
    numOfHotels: 6,
    transportAccessibility: 4,
  },
  {
    name: 'Татинский район',
    numOfAtractions: 26,
    numOfHotels: 4,
    transportAccessibility: 3,
  },
  {
    name: 'Томпонский район',
    numOfAtractions: 11,
    numOfHotels: 6,
    transportAccessibility: 3,
  },
  {
    name: 'Усть Алданский район',
    numOfAtractions: 4,
    numOfHotels: 2,
    transportAccessibility: 4,
  },
  {
    name: 'Усть Майский район',
    numOfAtractions: 2,
    numOfHotels: 1,
    transportAccessibility: 3,
  },
  {
    name: 'Хангалаский район',
    numOfAtractions: 13,
    numOfHotels: 24,
    transportAccessibility: 5,
  },
  {
    name: 'Чурапчинский район',
    numOfAtractions: 2,
    numOfHotels: 3,
    transportAccessibility: 5,
  },
  {
    name: 'Эвено-Бытанский район',
    numOfAtractions: 2,
    numOfHotels: 5,
    transportAccessibility: 3,
  },
  {
    name: 'Якутск',
    numOfAtractions: 22,
    numOfHotels: 28,
    transportAccessibility: 5,
  },
  {
    name: 'Аллаиховский район',
    numOfAtractions: 8,
    numOfHotels: 5,
    transportAccessibility: 1,
  },
  {
    name: 'Устья Янский район',
    numOfAtractions: 8,
    numOfHotels: 2,
    transportAccessibility: 1,
  },
  {
    name: 'Борогорский район',
    numOfAtractions: 8,
    numOfHotels: 5,
    transportAccessibility: 5,
  }

]

app.get('/api/get_data', async (req, res) => {
  res.json(mainData)
})

app.post('/api/route', async (req, res) => {
  try {
    const locations = req.body.locations;
    if (locations.length !== 3) {
      res.status(422).json({ error: 'Expected 2 waypoints' });
      return;
    }
    const waypoints = await Promise.all(
      locations.map((location) => geocodeLocation(location))
    );
    res.json({ waypoints });
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
