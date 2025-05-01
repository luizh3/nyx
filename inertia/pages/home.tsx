import { Head } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Input } from '~/lib/components/ui/input'

export default function Home({ sayMyName }: any) {
  return (
    <>
      <Head title="Homepage" />

      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col gap-4 w-2/4'>
          <Input></Input>
          <Button>{sayMyName}</Button>
        </div>
      </div>
    </>
  )
}