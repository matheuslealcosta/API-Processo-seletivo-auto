import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import {google} from 'googleapis';


const prisma = new PrismaClient();

class InscricaoController {
  static getAuthSheets = async (req: Request, res: Response) => {
    
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes:"https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
      version: "v4",
      auth: client
    });

    const spreadsheetId = "1iHKoZaOXPGgLmT7tOg9Ob2FOm3oKfe-jWH7f_o4fnyg"

    return {
      auth,
      client,
      googleSheets,
      spreadsheetId,
    };
    
  };

  static store = async (req: Request, res: Response) => {
    const { googleSheets, auth, spreadsheetId } = await InscricaoController.getAuthSheets(req, res);

    const {nome, email, curso, telefone } = req.body;

    const row = await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Página1",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[nome, email, curso, telefone]]
      },
    });
  
    res.send(row.data);
  };
}

export default InscricaoController;
