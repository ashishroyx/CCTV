const { PrismaClient } = require('../app/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  // Create Cameras
  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: '1st Floor' },
      { name: 'Vault', location: 'Basement' },
      { name: 'Main Entrance', location: 'Ground Floor' },
    ],
  });

  const allCameras = await prisma.camera.findMany();

  const now = new Date();
  const hoursAgo = (h) => new Date(now.getTime() - h * 60 * 60 * 1000);

  await prisma.incident.createMany({
    data: [
      {
        cameraId: allCameras[0].id,
        type: 'Unauthorized Access',
        tsStart: hoursAgo(1),
        tsEnd: hoursAgo(0.9),
        thumbnailUrl: '/thumb1.jpeg',
        resolved: false,
      },
      {
        cameraId: allCameras[1].id,
        type: 'Gun Threat',
        tsStart: hoursAgo(3),
        tsEnd: hoursAgo(2.8),
        thumbnailUrl: '/thumb2.jpeg',
        resolved: false,
      },
      {
        cameraId: allCameras[2].id,
        type: 'Face Recognised',
        tsStart: hoursAgo(4),
        tsEnd: hoursAgo(3.5),
        thumbnailUrl: '/thumb3.jpg',
        resolved: true,
      },
      {
        cameraId: allCameras[0].id,
        type: 'Gun Threat',
        tsStart: hoursAgo(5),
        tsEnd: hoursAgo(4.9),
        thumbnailUrl: '/thumb4.jpeg',
        resolved: false,
      },
      {
        cameraId: allCameras[1].id,
        type: 'Unauthorized Access',
        tsStart: hoursAgo(6),
        tsEnd: hoursAgo(5.8),
        thumbnailUrl: '/thumb5.jpeg',
        resolved: false,
      },
      {
        cameraId: allCameras[2].id,
        type: 'Face Recognised',
        tsStart: hoursAgo(7),
        tsEnd: hoursAgo(6.5),
        thumbnailUrl: '/thumb6.jpeg',
        resolved: true,
      },
      {
        cameraId: allCameras[0].id,
        type: 'Gun Threat',
        tsStart: hoursAgo(8),
        tsEnd: hoursAgo(7.9),
        thumbnailUrl: '/thumb7.jpeg',
        resolved: false,
      },
      {
        cameraId: allCameras[1].id,
        type: 'Unauthorized Access',
        tsStart: hoursAgo(9),
        tsEnd: hoursAgo(8.8),
        thumbnailUrl: '/thumb8.jpeg',
        resolved: true,
      },
      {
        cameraId: allCameras[2].id,
        type: 'Face Recognised',
        tsStart: hoursAgo(10),
        tsEnd: hoursAgo(9.5),
        thumbnailUrl: '/thumb9.png',
        resolved: false,
      },
      {
        cameraId: allCameras[0].id,
        type: 'Gun Threat',
        tsStart: hoursAgo(11),
        tsEnd: hoursAgo(10.8),
        thumbnailUrl: '/thumb10.jpeg',
        resolved: false,
      },
      {
        cameraId: allCameras[1].id,
        type: 'Unauthorized Access',
        tsStart: hoursAgo(12),
        tsEnd: hoursAgo(11.8),
        thumbnailUrl: '/thumb11.jpg',
        resolved: false,
      },
      {
        cameraId: allCameras[2].id,
        type: 'Face Recognised',
        tsStart: hoursAgo(13),
        tsEnd: hoursAgo(12.5),
        thumbnailUrl: '/thumb12.jpeg',
        resolved: false,
      },
    ],
  });
}

main()
  .then(() => {
    console.log('✅ Seed completed.');
    return prisma.$disconnect();
  })
  .catch((err) => {
    console.error('❌ Error seeding:', err);
    prisma.$disconnect();
    process.exit(1);
  });
