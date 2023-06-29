import UserService from '../services/user_service'
import { UserCreateDto } from '../dtos/user/user_create_dto'

describe('Test UserService', () => {

    test('Check user email', async () => {
        //arrange
        const fakeUserData = {
            email: "quan3@gmail.com",
            password: "quan3",
            role: "User",
            phone: "0924721184"
        }

        UserService.createUser = jest.fn().mockReturnValue(fakeUserData)

        const userCreateDto : UserCreateDto = {
            email: "quan3@gmail.com",
            password: "quan3",
            role: "User",
            phone: "0924721184"
        }

        //act
        const result = await UserService.createUser(userCreateDto)

        //assert 
        expect(result.email).toBe("quan3@gmail.com")
    })
})