import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createServerComponentClient({ cookies })

export default supabase
