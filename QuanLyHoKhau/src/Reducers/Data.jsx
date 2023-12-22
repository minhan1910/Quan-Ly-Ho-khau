export const userList = [
    {
        userId: 1,
        name: "Nguyễn Văn A",
        age: 32,
        cmnd: 916849055,
        phone: 916841355,
        householdId: 1,
        note: "note1",
        quanHeChuHo: true

    },
    {
        userId: 2,
        name: "Phạm Văn B",
        age: 55,
        cmnd: 123131231,
        phone: 916849055,
        householdId: 1,
        note: "note1",
        quanHeChuHo: "Cô"

    },
    {
        userId: 3,
        name: "Dương Hoa",
        age: 21,
        cmnd: 13123123,
        phone: 1231123123,
        householdId: 2,
        note: "note1",
        quanHeChuHo: "Chú"

    },
    {
        userId: 4,
        name: "Triển Chiêu",
        age: 13,
        cmnd: 13123123,
        phone: 1231123123,
        householdId: 3,
        note: "note1",
        quanHeChuHo: "Bác"

    },
].sort((a, b) => b.userId - a.userId);

export const householdList = [
    {
        householdId: 1,
        householdName: "Dương Văn Hy",
        numberOfPersons: 5,
        address: "Đường 1212312 q1",
        tamTru: false, 
        tamVang: false,
    },
    {
        householdId: 2,
        householdName: "Dương Khang",
        numberOfPersons: 5,
        address: "đường phố 1313",
        tamTru: false, 
        tamVang: false,
    },
    {
        householdId: 3,
        householdName: "Minh Long",
        numberOfPersons: 5,
        address: "144 địa chỉ p5",
        tamTru: false, 
        tamVang: false,
    },
    {
        householdId: 4,
        householdName: "Minh Phước",
        numberOfPersons: 5,
        address: "154 địa chỉ p3",
        tamTru: false, 
        tamVang: false,
    },
].sort((a, b) => b.householdId - a.householdId);
