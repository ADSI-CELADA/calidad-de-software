import { 
  BarChart3, Code2, Shield, Zap, TrendingUp, CheckCircle2, Award, GitBranch, Lightbulb
} from 'lucide-react';

export const getMenuItems = () => [
  { id: 'inicio', label: 'Inicio', icon: <Lightbulb className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
  { id: 'factores', label: '8 Factores', icon: <TrendingUp className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
  { id: 'codigo', label: 'Código', icon: <Code2 className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
  { id: 'proceso', label: 'Proceso', icon: <GitBranch className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
  { id: 'auditoria', label: 'Auditoria', icon: <CheckCircle2 className="w-5 h-5" />, color: 'from-indigo-500 to-blue-500' },
  { id: 'normas', label: 'Normas', icon: <Shield className="w-5 h-5" />, color: 'from-teal-500 to-green-500' },
  { id: 'conclusion', label: 'Conclusiones', icon: <Award className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' }
];