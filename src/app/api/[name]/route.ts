export const dynamic = 'force-static'

export async function GET({ params }: { params: { name: string } }) {
    console.log(params);

    const response = {
        status: 'true',
        message: 'Data success',
        menu: String
    }

    return Response.json(response)
}