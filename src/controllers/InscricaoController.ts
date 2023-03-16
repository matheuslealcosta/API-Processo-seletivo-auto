import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { google } from 'googleapis';

const prisma = new PrismaClient();
const SPREADSHEET_ID = 'SPREADSHEET_ID'; // Substitua pelo ID da sua planilha
const RANGE = 'Sheet1'; // Substitua pela range que deseja inserir os dados
const CREDENTIALS = require('./credentials.json');

class InscricaoController {
  static store = async (req: Request, res: Response) => {
  
    
  };
}

export default InscricaoController;
