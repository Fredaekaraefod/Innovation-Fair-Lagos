import { PrismaClient } from '@prisma/client'
import schoolsByLGA from '../src/data/schools-by-lga.json'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding coverage...')

    const entries = Object.entries(schoolsByLGA)

    for (const [lga, schools] of entries) {
        for (const schoolName of schools) {
            const existingSchool = await prisma.school.findFirst({
                where: { name: schoolName }
            })

            if (!existingSchool) {
                await prisma.school.create({
                    data: {
                        name: schoolName,
                        lga: lga
                    }
                })
            }
        }
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
