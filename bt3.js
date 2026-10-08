const rooms = [{
        roomId: "P101",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Deluxe",
        pricePerNight: 1500000,
        status: "VACANT"
    },
    {
        roomId: "P103",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    }
];

function showRooms() {
    console.log("===== DANH SÁCH PHÒNG =====");
    console.log("Mã phòng | Loại phòng | Giá/đêm | Trạng thái");
    for (let i = 0; i < rooms.length; i++) {
        console.log(
            rooms[i].roomId + " | " +
            rooms[i].roomType + " | " +
            rooms[i].pricePerNight + " VNĐ | " +
            rooms[i].status
        );
    }
    console.log("");
}
showRooms();
const newRoom = {
    roomId: "P104",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
};
rooms.push(newRoom);
console.log("===== SAU KHI THÊM P104 =====");
showRooms();
for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P101") {
        rooms[i].status = "OCCUPIED";
        break;
    }
}
console.log("===== SAU KHI CHECK-IN P101 =====");
showRooms();
for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P103") {
        rooms.splice(i, 1);
        break;
    }
}
console.log("===== SAU KHI XÓA P103 =====");
showRooms();