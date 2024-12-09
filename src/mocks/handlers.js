import { HttpResponse, http } from 'msw';

// Hur payloaden ser ut nedan:
// {when: "2024-12-10T13:00", lanes: "1", people: "2", shoes: ["43", "40"]}
const payload = {
  when: '2024-12-10T13:00',
  lanes: '1',
  people: '2',
  shoes: ['43', '40'],
};

export const handlers = [
  // * basic från sidan
  http.post(
    'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com',
    ({ request }) => {
      return HttpResponse.json({});
    }
  ),
];

// Från booking.jsx (kolla även i webbläsare)
// async function sendBooking(bookingInfo) {
//     const response = await fetch(
//       "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
//       {
//         method: "POST",
//         headers: {
//           "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
//         },
//         body: JSON.stringify(bookingInfo),
//       }
//     );
//     const data = await response.json();

//     return data;
//   }
