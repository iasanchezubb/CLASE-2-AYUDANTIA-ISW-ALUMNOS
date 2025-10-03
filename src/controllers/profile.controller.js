import { handleSuccess } from "../Handlers/responseHandlers.js";
import { DeleteUserProfile } from "../services/user.service.js";
import { PatchUserProfile } from "../services/user.service.js";

export function getPublicProfile(req, res) {
  handleSuccess(res, 200, "Perfil público obtenido exitosamente", {
    message: "¡Hola! Este es un perfil público. Cualquiera puede verlo.",
  });
}

export function getPrivateProfile(req, res) {
  const user = req.user;

  handleSuccess(res, 200, "Perfil privado obtenido exitosamente", {
    message: `¡Hola, ${user.email}! Este es tu perfil privado. Solo tú puedes verlo.`,
    userData: user,
  });
}

export function DeleteProfile(req,res){
  const user=req.user;
  DeleteUserProfile(user.sub).then((result)=>{
    handleSuccess(res,200,"Perfil eliminado exitosamente",result);
  }).catch((error)=>{
    res.status(404).json({error:error.message});
  });
}

export function PatchProfile(req,res){
  const user=req.user;
  const data=req.body;
  PatchUserProfile(user.sub,data).then((result)=>{
    handleSuccess(res,200,"Perfil modificado exitosamente",result);
  }).catch((error)=>{
    res.status(404).json({error:error.message});
  });
}