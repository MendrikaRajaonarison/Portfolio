import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(projects);
  }
  catch(error) {
    console.error(`Erreur lors de la récupération des projets : `, error);
    res.status(500).json({ error: "Erreur serveur"});
  }
}
