use tauri::command;
use std::fs;

#[command]
fn ler_saida_do_greg() -> String {
    match fs::read_to_string("saida_tauri.txt") {
        Ok(texto) => texto,
        Err(_) => "Greg ainda não respondeu nada.".to_string(),
    }
}