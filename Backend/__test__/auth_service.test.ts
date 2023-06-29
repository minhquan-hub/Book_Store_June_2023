import AuthService from '../services/auth_service'


describe('Test AuthService', () => {

    test('Login successful', async () => {
        // arrange
        const fakeData = {
            email: "quan1@gmail.com",
            roleName: "Admin",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2E2MjkxZTg1N2M3ZDdhNzA1M2Q3NyIsImVtYWlsIjoicXVhbjFAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjU3OTcyMjk2LCJleHAiOjE2NTc5NzM0OTZ9.vn1kxzOPnZ6l5oYllV1Sh05dnzjyUVfUPIT4wmGTF_Y",
            isSuccess: true
        }

        AuthService.loginUser = jest.fn().mockReturnValue(Promise.resolve(fakeData));

        const loginRequestDto = {
          email: 'quan2@gmail.com',
          password: 'quan1',
        }
    
        // act
        const result = await AuthService.loginUser(loginRequestDto)

        // assert
        expect(result?.isSuccess).toBe(true)
    })

    test('Login Fail', async () => {
        // arrange
        const fakeData = {
            "email": "quan1@gmail.com",
            "roleName": "Admin",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2E2MjkxZTg1N2M3ZDdhNzA1M2Q3NyIsImVtYWlsIjoicXVhbjFAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjU3OTcyMjk2LCJleHAiOjE2NTc5NzM0OTZ9.vn1kxzOPnZ6l5oYllV1Sh05dnzjyUVfUPIT4wmGTF_Y",
            "isSuccess": false,
        }
        AuthService.loginUser = jest.fn().mockReturnValue(Promise.resolve(fakeData));
        
        const loginRequestDto = {
          email: 'quan2@gmail.com',
          password: 'quan1',
        }
    
        // act
        const result = await AuthService.loginUser(loginRequestDto)

        // assert
        expect(result?.isSuccess).toBe(false)
    })
})


