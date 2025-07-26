import { PrismaClient } from '@/app/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PATCH(request, { params }) {
  const { id } = params;

  try {
    const incident = await prisma.incident.update({
      where: { id: parseInt(id) },
      data: { resolved: true },
    });

    return NextResponse.json(incident);
  } catch (error) {
    return NextResponse.json(
      { error: 'Incident not found or update failed', details: error.message },
      { status: 404 }
    );
  }
}
