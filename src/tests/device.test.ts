import {OperatingSystem} from "types/enums/operatingSystemType";
import {Device} from "types/models/deviceType";

describe("Device interface", () => {
   it("should have the correct properties", () => {
      //arrange
      const device: Device = {
         id: "1",
         system_name: "Test device",
         type: OperatingSystem.WINDOWS,
         hdd_capacity: "500 GB",
      };
      //assert
      expect(device).toHaveProperty("id", "1");
      expect(device).toHaveProperty("system_name", "Test device");
      expect(device).toHaveProperty("type", OperatingSystem.WINDOWS);
      expect(device).toHaveProperty("hdd_capacity", "500 GB");
   });
});
describe("OperatingSystem enum", () => {
   it("should have the correct values", () => {
      //assert
      expect(OperatingSystem.WINDOWS).toBe("Windows");
      expect(OperatingSystem.MAC).toBe("Mac");
      expect(OperatingSystem.LINUX).toBe("Linux");
   });
});
describe("Device Interface", () => {
   it("should have incorrect values", () => {
      //arrange
      const device: Device = {
         id: "123",
         system_name: "device-system",
         //@ts-ignore
         type: "invalid-os",
         hdd_capacity: "1TB",
      };
      //assert
      expect(device.id).not.toBe("");
      expect(device.system_name).not.toBe("");
      expect(device.type).not.toBe(OperatingSystem.WINDOWS);
      expect(device.type).not.toBe(OperatingSystem.MAC);
      expect(device.type).not.toBe(OperatingSystem.LINUX);
      expect(device.hdd_capacity).not.toBe("");
   });
});
