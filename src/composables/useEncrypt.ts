import JSEncrypt from 'jsencrypt'

export default function useEncrypt(input: string): string | boolean {
  const RSAEncrypt = new JSEncrypt()
  RSAEncrypt.setPublicKey(import.meta.env.VITE_ENCRYPT_KEY)
  return RSAEncrypt.encrypt(input)
}
