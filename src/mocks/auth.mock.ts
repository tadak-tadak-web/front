import { http, HttpResponse } from 'msw';

// 로그인 핸들러
export const authHandlers = [
  http.post<object, { id: string; password: string }>(
    '/api/login',
    async ({ request }) => {
      const { id, password } = await request.json();

      if (id === 'john' && password === 'secret') {
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

  // 로그인된 유저 정보 요청
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
];
