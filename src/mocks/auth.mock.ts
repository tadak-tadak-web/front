import { http, HttpResponse } from 'msw';

const MOCK_ID = 'john';
const MOCK_PW = 'secret';
export const authHandlers = [
  http.post<object, { id: string; password: string }>(
    '/api/login',
    async ({ request }) => {
      const { id, password } = await request.json();

      if (id === MOCK_ID && password === MOCK_PW) {
        return HttpResponse.json(
          { message: 'Login successful' },
          {
            headers: {
              'set-cookie': 'sessionId=abc123; Path=/api;',
            },
          }
        );
      }

      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  ),

  http.get('/api/user', ({ cookies }) => {
    if (cookies.sessionId === 'abc123') {
      return HttpResponse.json({
        data: {
          id: 'abc-123',
          firstName: 'John',
          lastName: 'Maverick',
        },
      });
    }

    return HttpResponse.json(
      { data: null, message: 'Unauthorized' },
      { status: 200 }
    );
  }),
  http.post<object, { id: string; password: string }>(
    '/api/user/register',
    async ({ request }) => {
      const { id, password } = await request.json();

      if (id && password) {
        return HttpResponse.json(
          { message: 'Signup successful' },
          {
            headers: {
              'set-cookie': 'sessionId=abc123; Path=/api;',
            },
          }
        );
      }

      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  ),
  http.post<object, { id: string }>(
    '/api/user/check-id',
    async ({ request }) => {
      const { id } = await request.json();

      if (id !== MOCK_ID) {
        return HttpResponse.json(
          { status: true },
          {
            headers: {
              'set-cookie': 'sessionId=abc123; Path=/api;',
            },
          }
        );
      }

      return HttpResponse.json({ status: false }, { status: 200 });
    }
  ),
];
