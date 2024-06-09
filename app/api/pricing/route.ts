export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import { pricing_algo } from '@/lib/pricing_algo';

export async function GET(request: Request) {
    try {
        const response = { message: 'Pricing Algorithm Result', cost: pricing_algo() };

        return new Response(`${JSON.stringify(response)}`);
    } catch (error) {
        console.log(JSON.stringify(error))
    }
  
}