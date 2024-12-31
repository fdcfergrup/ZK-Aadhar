# ZK Aadhaar

Zero Knowledge Aadhaar is a zero-knowledge proof solution that allows users to prove their Aadhaar identity while maintaining complete privacy and anonymity. This implementation uses React.js with Vite for a fast and efficient development experience.

# Live Demo
https://zk-aadhaar-metaschool.vercel.app/

## Features

- **Zero-Knowledge Proofs:** Verify Aadhaar identity without revealing personal information
- **Privacy-First:** No storage of personal data or Aadhaar details
- **User-Friendly Interface:** Simple and intuitive process for identity verification
- **Fast Development:** Built with Vite for quick development and hot module replacement
- **Type Safety:** Implemented with TypeScript for better code quality
- **Modern Stack:** Uses React.js and latest web technologies

## Technologies Used
- **Frontend:** React.js with TypeScript
- **Build Tool:** Vite
- **Zero-Knowledge Proofs:** Anon Aadhaar SDK
- **Styling:** CSS/SCSS
- **Development:** Node.js

## Use Cases

- Users can verify their identity using Aadhaar without revealing their actual Aadhaar data, ensuring privacy and security while proving their identity.
- Businesses can authenticate users by verifying their identity proofs, all while respecting the user's privacy and not accessing sensitive Aadhaar details.
- The verification proofs are securely stored on the blockchain, making them tamper-proof, accessible, and immutable, ensuring the integrity of the data.
- Users have control over which parts of their identity they wish to verify, allowing them to disclose only the necessary details without revealing their full Aadhaar data.


## Installation Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/0xmetaschool/ZK-Aadhaar.git
    ```

2. Install Dependencies:
    ```bash
    cd ZK-Aadhaar
    npm i --y
    ```

3. Start the Development Server:
    ```bash
    npm run dev
    ```

Open your browser and navigate to http://localhost:5173





## Screenshots
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b6685969-f43c-43a5-a920-38eee97dc376" alt="Screenshot 4" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/99d168c6-f8ca-404f-af17-344907ba3743" alt="Screenshot 1" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/5687043d-da6b-4978-b084-ea04fa826658" alt="Screenshot 2" width="400"></td>
    
  </tr>
</table>

## How to Use

1. **Connect Your Wallet:**  
   Start the application and connect your Web3 wallet (such as MetaMask) to interact with the system.

2. **Upload Aadhaar PDF:**  
   Provide your Aadhaar PDF file through the secure interface for verification. Your data is never exposed.

3. **Generate Proof:**  
   The application will generate a zero-knowledge proof of your Aadhaar data, which ensures that your personal information is kept private.

4. **Proof on Blockchain:**  
   The zero-knowledge proof is then stored on the blockchain for verification purposes.

5. **Verify Later:**  
   Anyone can verify your identity proof later without ever accessing or viewing your original Aadhaar data.


## Development

To contribute to this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

This project prioritizes user privacy and security:
- No personal data is stored
- All proofs are generated client-side
- Zero-knowledge proofs ensure complete anonymity
- No Aadhaar details are transmitted or stored

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, open an issue in the [GitHub repository](https://github.com/0xmetaschool/ZK-Aadhaar/issues).
