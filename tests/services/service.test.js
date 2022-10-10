const RoleService = require('../../services/role.service');
const {Role,User} = require('../../models/index');
const authHelperService=require('../../services/auth-helper.service');



// {
//     "message": "Role is added successfully",
//     "success": true,
//     "code": 200,
//     "data": {}
// }

// test('when getCategories is called, it should return all the categories', async()=>{
//     const spy = jest.spyOn(categoryService, 'getAllCategories').mockReturnValue(allCategoriesResponse);
//     const req = mockRequest();
//     const res = mockResponse();
//     const result = await categoryController.getCategories(req, res);
//     expect(spy).toHaveBeenCalled();
//     expect(result.json).toHaveBeenCalled();
//     expect(result.json).toHaveBeenCalledWith({
//         message: 'Successfully fetched the categories',
//         success: true,
//         code: 200,
//         data: allCategoriesResponse
    
//     });
// }); 

// test('when addRole to user is called', async()=>{
//     const spy = jest.spyOn(Category, 'findAll').mockReturnValue(allCategoriesResponse);
//     const result = await categoryService.getCategoriesByName('Electronics');
//     expect(spy).toHaveBeenCalled();
//     expect(result).toEqual(allCategoriesResponse);
// });
const user={
   
      id:6,
      email: 'Sm@gmail.com',
      password: '$2a$10$TWA.z/M1xGiDOrYhdW4.4euCUrv7VxYxnl1cf0ZmabaOq/x6S8D2i',
      username: 'Manoh',
     
}
const Roles={
  
      id: 1,
      name: 'Admin',
      
    
}




test('when addRole to user is called', async()=>{
    const spy = jest.spyOn(authHelperService, 'getUserByEmail').mockReturnValue(user);
    const spy1 = jest.spyOn(Role, 'findOne').mockReturnValue(Roles);
    const rol = await RoleService.getRoleByName("Admin");
    expect(spy1).toHaveBeenCalled();
    expect(rol).toBe(Roles)
    user.addRole=jest.fn() 
    const result = await RoleService.addRoleToUser('Sm@gmail.com','Admin');
    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(user)
    expect(user.addRole).toHaveBeenCalled()
});
