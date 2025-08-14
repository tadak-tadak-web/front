import { http, HttpResponse } from 'msw';

// 로그인 핸들러
export const authHandlers = [
  http.post<object, { id: string; password: string }>(
    '/login',
    async ({ request }) => {
      const { id, password } = await request.json();

      if (id === 'john' && password === 'secret') {
        return HttpResponse.json(
          { message: 'Login successful' },
          {
            headers: {
              'Set-Cookie':
                'sessionId=abc123; Path=/; HttpOnly; Secure; SameSite=Strict',
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
  http.get('/user', ({ cookies }) => {
    if (cookies.sessionId === 'abc123') {
      return HttpResponse.json({
        id: 'abc-123',
        firstName: 'John',
        lastName: 'Maverick',
      });
    }

    return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }),
];
