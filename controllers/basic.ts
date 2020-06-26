const hello_root= async ({ response }: { response: any }) => { 
    response.body = 'hello root' }

export {hello_root}